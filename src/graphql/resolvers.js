import * as achievement from './data/achievement';

const achievements = (args) => {
  return achievement.list();
};

const addAchievement = (args) => {
  return achievement.add(args);
};

export {achievements, addAchievement}