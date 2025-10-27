
/**
 * list 안에 내용은 아래와 같이 정의해주세요!
 * {path : '/test', element :<Test />}
 * 
 */

import Test from "@/components/Test";
import CalendarView from "@/pages/CalendarView";
import GoalSetupView from "@/pages/goal/GoalSetupView";
import GoalEditView from "@/pages/goal/GoalEditView";
import AchievementHistoryView from "@/pages/goal/AchievementHistoryView";
import AchievementDetailView from "@/pages/goal/AchievementDetailView";

// 메인 route list
const mainList : Array<any> = [ 
    {path : '/', element :<Test />}
];

// 유저 정보 route list
const authList : Array<any> = [ 
];


// 캘린더 route list
const calendarList : Array<any> = [{path : '/calendar', element :<CalendarView />}];


// 카드 route list
const cardList : Array<any> = [];


// 달성도 route list
const goalList : Array<any> = [
    {path : '/goal/setGoal', element :<GoalSetupView />},
    {path : '/goal/editGoal', element :<GoalEditView />},
    {path : '/goal/achievementHistory', element :<AchievementHistoryView />},
    {path: "/achievement/detail", element: <AchievementDetailView /> },
];


export const routerList = [
    ...mainList,
    ...authList,
    ...calendarList,
    ...cardList,
    ...goalList,
];