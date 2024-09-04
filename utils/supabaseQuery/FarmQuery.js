import supabase from '../supabase/server'

export async function fetchFarmList(limit, offset ) {
  const { data,count, error } = await supabase
    .from("FarmList")
    .select('*' , { count: "exact" })
    .range(offset, offset + limit - 1); // Implementing pagination

  if (error) throw new Error("Error fetching Break Even Details!");

  return ({data,count}) ;
}

export const upsertBreakEvenData = async (data) => {
  const response = await supabase.from("FarmList").upsert(data);
  return response;
};
