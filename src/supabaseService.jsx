import { supabase } from "./supabaseClient"

// Create
export const createItem = async (data) => {
    const { data: result, error } = await supabase.from('medical_professionals').insert([data])
    if (error) throw error
    return result
}

export const createLessons = async (data) => {

    console.log("tocreatedata", data)

    const results = [];

    for (const item of data) {
        const { data: result, error } = await supabase
            .from('lessons')
            .insert([item]);
        if (error) throw error;
        results.push(result);
    }

    return results;
};

// Read
export const getUsers = async () => {
    const { data, error } = await supabase.from('users').select('*').order('created_at', { ascending: false });
    if (error) throw error
    return data
}

export const getUserById = async (id) => {
    const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .order('created_at', { ascending: false });
    if (error) throw error
    return data
}


export const getCourses = async () => {
    const { data, error } = await supabase.from('courses').select('*').order('created_at', { ascending: false });
    if (error) throw error
    return data
}

export const getCourseById = async (id) => {
    const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('id', id)
    .order('created_at', { ascending: false });
    if (error) throw error
    return data
}

export const getLessonsbyCourse = async (id) => {
    const { data, error } = await supabase
    .from('lessons')
    .select('*')
    .eq('course_id', id)
    .order('created_at', { ascending: false });
    if (error) throw error
    return data
}


export const getTimeins = async () => {
    const { data, error } = await supabase
        .from('medical_professionals')
        .select('*')
        .not('time_in', 'is', null) // <-- filter out rows where time_in is null
        .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
};

// Update

export const updateLesson = async (data) => {

  const updateData = data[0]; // separate ID from update fields
  
  const { data: result, error } = await supabase
    .from('lessons')
    .update(updateData)
    .eq('id', updateData.id)
    .select()
    if (error) throw error
    return result
}

export const updateLessons = async (data) => { // separate ID from update fields
  console.log(data)
  const { data: result, error } = await supabase
    .from('lessons')
    .update(data)
    .select()
    if (error) throw error
    return result
}

// Delete
export const deleteItem = async (email) => {
    const { data: result, error } = await supabase.from('medical_professionals').delete().eq('email_address', email)
    if (error) throw error
    return result
}

export const deleteCourse = async (data) => {
    console.log("to delete data", data)
    const { data: result, error } = await supabase.from('courses').delete().eq('email_address', email)
    if (error) throw error
    return result
}

export const deleteLesson = async (data) => {
    console.log("to delete data", data)
    const { data: result, error } = await supabase.from('lessons').delete().eq('id', email)
    if (error) throw error
    return result
}

export const deleteWithCharaters = async () => {
    const { data, error } = await supabase
        .from('medical_professionals')
        .delete()
        .ilike('email_address', '%@example.com');

    if (error) throw error;
    return data;
}
