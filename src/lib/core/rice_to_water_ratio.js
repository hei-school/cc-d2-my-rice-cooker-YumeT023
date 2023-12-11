const WATER_TO_RICE_RATIO = 0.5;

/**
 * General guideline for most types of rice
 * @param {number} rice cup of rice
 * @return {number} cup of water
 */
export const getRecommendedWaterToRice = (rice) => {
  return rice * WATER_TO_RICE_RATIO;
};
