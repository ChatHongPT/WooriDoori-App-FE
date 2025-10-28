
/**
 * list 안에 내용은 아래와 같이 정의해주세요!
 * {path : '/test', element :<Test />}
 * 
 */

import Test from "@/components/Test";
import CalendarView from "@/pages/CalendarView";
import DiaryView from "@/pages/DiaryView";
import DiaryEmotionView from "@/pages/DiaryEmotionView";
import DiaryWriteView from "@/pages/DiaryWriteView";
import NotificationView from "@/pages/NotificationView";

// 메인 route list
const mainList : Array<any> = [ 
    {path : '/', element :<Test />},
    {path : '/noti', element :<NotificationView />}
];

// 유저 정보 route list
const authList : Array<any> = [ 
];


// 캘린더 route list
const calendarList : Array<any> = [
    {path : '/calendar', element :<CalendarView />},
    {path : '/calendar/diary', element :<DiaryView />},
    {path : '/calendar/diary/emotion', element :<DiaryEmotionView />},
    {path : '/calendar/diary/write', element :<DiaryWriteView />}
];


// 카드 route list
const cardList : Array<any> = [];




export const routerList = [
    ...mainList,
    ...authList,
    ...calendarList,
    ...cardList,
];