export interface IInstagramResponse {
    media: Array<IMedia>,
    user: IProfile
}



export interface IMedia {
    attribution: String,
    caption: String,
    comments: Array<IComments>,
    created_time: String,
    filter: String,
    id: String,
    images: {
        low_resolution: IResolution,
        standard_resolution: IResolution,
        thumbnail: IResolution
    },
    likes: {
        count: Number
    },
    link: String,
    location: String,
    tags: Array<String>,
    type: String,
    user: {
        id: String,
        full_name: String,
        profile_picture: String,
        username: String
    },
    user_has_liked: Boolean,
    users_in_photo: Array<String>
}






export interface IComments {
    count: Number
}


export interface IResolution {
    height: Number,
    url: String,
    width: Number
}


export interface IProfile {
    bio: String,
    counts: ICounts,
    full_name: String,
    id: String,
    is_business: Boolean,
    profile_picture: String,
    username: String,
    website: String
}

export interface  ICounts {
    media: Number,
    follows: Number,
    followed_by: Number
}