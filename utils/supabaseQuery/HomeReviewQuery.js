import supabase from '../supabase/server'
export async function fetchHomeReview() {
  const { data, error } = await supabase
    .from("HomeReview")
    .select('*')
  if (error) throw new Error("Error fetching Break Even Details!");

  return data;
}

export const upsertHomeReview = async (data) => {
const response = await supabase.from("HomeReview").upsert(data);
return response
};
