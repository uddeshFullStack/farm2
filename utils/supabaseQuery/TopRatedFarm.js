
import supabase from '../supabase/server'
export async function fetchTopRatedFarm() {
  const { data, error } = await supabase
    .from("TopRatedFarm")
    .select('*')
  if (error) throw new Error("Error fetching Break Even Details!");

  return data;
}

export const upsertTopRatedFarm = async (data) => {
  // console.log("TopRatedFarm in upssert ", data);
  const response = await supabase.from("TopRatedFarm").upsert(data);
  return response
};
