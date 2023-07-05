import "server-only";
import data from "../../data/tech.json";
export function getSkills() {
  const tech = data.data;

  return tech;
}

export const getTechAsset = (id: string) => {
  const asset = data.data.find((asset) => asset.id === id);

  if (!asset) {
    return null;
  }
  return asset.asset;
};
