import { Middleware } from "redux";

const filterMiddleware: Middleware = (store) => (next) => (action) => {
  if (action.type === "Messages/realtimeUpdate") {
    const storeData = store.getState();
    const chatid = action.payload.msg.chatId;
    const msgid = action.payload.msg.id;

    if (
      storeData.chatMsgs.msgs[chatid][
        storeData.chatMsgs.msgs[chatid].length - 1
      ].id === msgid
    ) {
      return;
    }
  }
  return next(action);
};
export default filterMiddleware;

// {
//     type: 'Messages/realtimeUpdate',
//     payload: {
//       msg: {
//         id: '71666531-309e-4379-b9bf-a0be540e2ce6',
//         content: 'hai',
//         senderId: 'd827f3ed-af31-4bf0-9b5f-de9243c4fcfb',
//         chatId: 'a9e13bb9-a872-4d89-a027-d882e14ef988',
//         sentTime: '2023-10-08T08:11:52.627Z'
//       }
//     }
//   }
//
