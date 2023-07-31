export const IndexUtils = {
  image:
    'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png',
  name: 'LAMBORGHINI',
  cost: 3000,
  autionEndsAt: 24, // given in hours
};

export const calculateTimeLeft = (endingTime: number, currentTime: number) => {
  const timeLeft = endingTime - currentTime;
  if (timeLeft <= 0) {
    return {hours: 0, minutes: 0, seconds: 0};
  }

  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return {hours, minutes, seconds};
};

export const timeLeftDisplay = (
  hours: number,
  minutes: number,
  seconds: number,
) =>
  `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
