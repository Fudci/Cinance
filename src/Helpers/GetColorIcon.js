export const Precentage24 = percent => {
  if (percent.includes('-')) {
    return {color: '#D74156', value: `${percent}%`};
  } else if (percent.includes('0.0')) {
    return {color: '#87888B', value: `${percent}%`};
  } else {
    return {color: '#2EBC84', value: `+${percent}%`};
  }
};
