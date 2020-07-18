import React from 'react';

import camelcase from 'camelcase';
import { useRouter } from 'next/router';
import { number, string } from 'prop-types';

import Error from '~/pages/_error';

import * as posts from '@Conf/posts';
import { Modal } from '@Container';
import { useHistory } from '@Hook';

export default (Component) => {
  function WithError({ statusCode, pid, sid, ...props }) {
    const { pathname } = useRouter();
    const [, prevHistory] = useHistory();

    function settingsExist() {
      const prevPid = prevHistory?.query?.sid ?? '';
      const prevSettingsExist = Modal.modalsId.includes(prevPid);
      const currentSettingsExist = Modal.modalsId.includes(sid);

      return !prevSettingsExist && currentSettingsExist && prevHistory
        ? false
        : currentSettingsExist;
    }

    function postExist() {
      return pid ? camelcase(pid) in posts : true;
    }

    function isToRenderError() {
      return (
        statusCode === 404 ||
        (pathname.includes('settings') && !settingsExist()) ||
        !postExist()
      );
    }

    if (isToRenderError()) return <Error />;

    const { query } = useRouter();

    return (
      <Component
        statusCode={statusCode}
        pid={pid || query.pid}
        sid={sid || query.sid}
        {...props}
      />
    );
  }

  WithError.getInitialProps = async (ctx) => {
    const { res, query, pathname } = ctx;
    const { pid, sid } = query;
    const postDoesntExist = pid && !(camelcase(pid) in posts);
    const settingsDoesntExist = sid && !Modal.modalsId.includes(sid);
    const settingsWithoutSid = !sid && pathname.includes('settings');

    if (res && (postDoesntExist || settingsDoesntExist || settingsWithoutSid))
      res.statusCode = 404;

    return {
      statusCode: res?.statusCode ?? 200,
      ...query,
      ...((Component.getInitialProps &&
        (await Component.getInitialProps(ctx))) ||
        {}),
    };
  };

  WithError.propTypes = {
    statusCode: number.isRequired,
    pid: string,
    sid: string,
  };

  WithError.defaultProps = {
    pid: undefined,
    sid: undefined,
  };

  return WithError;
};
