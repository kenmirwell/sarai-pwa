import { update } from "three/examples/jsm/libs/tween.module.js"
import { supabase } from "./supabaseClient"

// Create
export const createItem = async (data) => {
    const { data: result, error } = await supabase.from('medical_professionals').insert([data])
    if (error) throw error
    return result
}

export const createLessons = async (data) => {

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

export const createUser = async (data) => {
    const { data: result, error } = await supabase
        .from('users')
        .insert([data])
        .select();
    if (error) throw error
    return result
}

export const createPreAssessmentAns = async (submission) => {
  const { data: existing, error: fetchError } = await supabase
    .from('users_pre_assessment_answers')
    .select('*')
    .eq('user_id', submission.user_id);

  if (fetchError) throw fetchError;

  if (!existing || existing.length === 0) {
    // Insert if not existing
    const { data, error } = await supabase
      .from('users_pre_assessment_answers')
      .insert([submission])
      .select();

    if (error) throw error;
    return data;
  } else {
    // Update if already exists
    const { data, error } = await supabase
      .from('users_pre_assessment_answers')
      .update({ question_and_answer: submission.question_and_answer }) // only update the answers
      .eq('user_id', submission.user_id)
      .select();

    if (error) throw error;
    return data;
  }
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


export const getUserByEmail = async (email) => {
    const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .order('created_at', { ascending: false });
    if (error) throw error
    return data
}

export const getUserByEmailAndPassword = async (loggedDetails) => {
    const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', loggedDetails.email)
    .eq('password', loggedDetails.password)
    .order('created_at', { ascending: false });
    if (error) throw error
    return data
}

export const getUserIfNoAssessment = async (email, password) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .eq('password', password)
    .is('assessment_result', null)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
};

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

export const getPreAssessment = async () => {
    const { data, error } = await supabase
        .from('pre_assessment')
        .select('*')
        .order('order', { ascending: true });

    if (error) throw error;
    return data;
};

export const getPreAssessmentResult = async (user) => {
    const { data, error } = await supabase
        .from('users_pre_assessment_answers')
        .select('*')
        .eq('user_id', user.id)

    if (error) throw error;
    return data;
};

// Update
export const updateCourse = async (data) => {

  const updateData = data[0]; // separate ID from update fields

  const { data: result, error } = await supabase
    .from('courses')
    .update(updateData)
    .eq('id', updateData.id)
    .select()
    if (error) throw error
    return result
}

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

export const updatePreAssessment = async (dataArray) => {
  const results = [];
  for (const data of dataArray) {
    const { id, ...fieldsToUpdate } = data;
    const { data: result, error } = await supabase
        .from('pre_assessment')
        .update(fieldsToUpdate)
        .eq('id', id)
        .select()
        .order('order', { ascending: true });
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
    const { data: result, error } = await supabase.from('courses').delete().eq('email_address', email)
    if (error) throw error
    return result
}

export const deleteLesson = async (data) => {
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

  setThumbnails(fetched);
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