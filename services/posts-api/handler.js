import * as DateLib from '../../libs/date-lib';

export const main = async (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message : 'Hello post!',
      date    : DateLib.getCurrentTime(),
    })
  });
};
