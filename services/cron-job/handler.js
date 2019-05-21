import * as DateLib from '../../libs/date-lib';

export const main = async (event, context, callback) => {
  callback(null, {
    status: true,
    date  : DateLib.getCurrentTime(),
  });
};
