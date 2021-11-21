CREATE DATABASE homediy;

CREATE TABLE users(
    users_id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    username VARCHAR(30) UNIQUE NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    profile_img VARCHAR(255)
)