
export class INSTAGRAM  {
    static instagram_route = 'https://api.instagram.com/v1';
    static  get_auth_token_route = 'https://api.instagram.com/oauth/access_token';
    static client_id= '33c711acd2c14356952c83cfe4f8d7e8';
    static client_secret =  ' a3f1e7631ced49fab187980cb3a45f4e';
    static grant_type = 'authorization_code';
    static redirect_url = 'http://localhost:700/login';
    static user_details='/users/self';
    static recinet_media='/media/recent';
    static access_token_api='/?access_token=';
    static comments='/media/{media-id}/comments';
    static likes='/media/{media-id}/likes';
    static media ='/media/{media-id}';
    static auth_redirect_url = 'https://api.instagram.com/oauth/authorize/?client_id='+INSTAGRAM.client_id+'&redirect_uri='+INSTAGRAM.redirect_url+'&response_type=code';
}

