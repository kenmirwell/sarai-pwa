import { update } from "three/examples/jsm/libs/tween.module.js"
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

export const updateLessons = async (dataArray) => {
  const results = [];
  for (const data of dataArray) {
    const { id, ...fieldsToUpdate } = data;
    const { data: result, error } = await supabase
      .from('lessons')
      .update(fieldsToUpdate)
      .eq('id', id)
      .select();

    if (error) throw error;
    results.push(result[0]); // result is an array
  }
  return results;
};


export const deleteLessons = async (dataArray) => {
  const results = [];
  for (const data of dataArray) {
    const { id, ...fieldsToUpdate } = data;
    const { data: result, error } = await supabase
      .from('lessons')
      .delete(fieldsToUpdate)
      .eq('id', id)
      .select();

    if (error) throw error;
    results.push(result[0]); // result is an array
  }
  return results;
};


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

export const storageUploads = async (dataArray) => {
    
    const results = [];

    for (const { filePath, thumbnail } of dataArray) {
        const { data: result, error } = await supabase
            .storage
            .from('sarai')
            .upload(filePath, thumbnail, {
            cacheControl: '3600',
            upsert: true
            });

        if (error) throw error;

        results.push(result);
    }
};

export const storageUpload = async (filePath, file) => {
  const { data, error } = await supabase
    .storage
    .from('sarai')
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: true,
    });

  if (error) throw error;

  const { publicURL } = supabase
    .storage
    .from('sarai')
    .getPublicUrl(filePath);

  // Image is now available via this URL (almost instantly)

  const publicUrl = `https://fcjqqpgmzxylmdrzqqym.supabase.co/storage/v1/object/public/sarai/${encodeURIComponent(filePath)}`;
  return {
    path: data.path,
    publicUrl
  };
};

export const fetchLessonsThumbnail = async ({lessons, setThumbnails}) => {
  const fetched = [];

  for (const { thumbnail, id } of lessons) {
    if(thumbnail) {
        const { data, error } = supabase
        .storage
        .from('sarai')
        .getPublicUrl(thumbnail);

        if (error) {
            console.error('Error fetching public URL:', error);
        } else {
            fetched.push({id, url: data.publicUrl });
        }
    } else {
        fetched.push({id, url: null });
    }
  }

  setThumbnails(fetched);
};

export const fetchLessonThumbnail = async ({lessons, setThumbnails}) => {
    // if(thumbnail) {
    //     const { data, error } = supabase
    //     .storage
    //     .from('sarai')
    //     .getPublicUrl(thumbnail);

    //     if (error) {
    //         console.error('Error fetching public URL:', error);
    //     } else {
    //         fetched.push({id, url: data.publicUrl });
    //     }
    // } else {
    //     fetched.push({id, url: null });
    // }

//   setThumbnails(fetched);
};


export const fetchProofImage = (props) => {
    if (props.selectedCol && props.selectedCol.payment) {
        const filePath = `${props.selectedCol.payment}`; 
        const { data, error } = props.supabase
            .storage
            .from(props.bucket)
            .getPublicUrl(filePath);

        if (error) {
            console.error('Error fetching public URL:', error);
        } else {
            props.setProof(data.publicUrl);
        }
    } else {
        props.setProof(null);
    }
}