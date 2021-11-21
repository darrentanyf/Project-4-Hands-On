CREATE DATABASE homediy;

CREATE TABLE users(
    users_id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    username VARCHAR(30) UNIQUE NOT NULL,
    users_password VARCHAR(255) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    profile_img VARCHAR(255)
)

CREATE TABLE guides(
    guides_id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(1000) NOT NULL,
    categories VARCHAR(255) NOT NULL,
    tools_required VARCHAR(255) NOT NULL,
    parts_required VARCHAR(255) NOT NULL,
    difficulty SMALLINT NOT NULL,
    time_taken SMALLINT NOT NULL,
    guides_img VARCHAR(255),
    users_id uuid REFERENCES users (users_id) 
)

CREATE TABLE reviews(
    reviews_id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    rating SMALLINT NOT NULL,
    comment VARCHAR(255),
    success BOOLEAN NOT NULL,
    clarity SMALLINT NOT NULL,
    difficulties VARCHAR(255),
    improvements VARCHAR(255),
    users_id uuid REFERENCES users (users_id),
    guides_id uuid REFERENCES guides (guides_id)
)
CREATE TABLE steps(
    steps_id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    step SMALLINT NOT NULL,
    title VARCHAR(255),
    description VARCHAR(255) NOT NULL,
    steps_img VARCHAR(255),
    guides_id uuid REFERENCES guides (guides_id)
)

INSERT INTO guides ( name, description, categories, tools_required, parts_required, difficulty, time_taken) VALUES
('Make Your Toilet Sparkle Under 30 Mins', 'The end all guide when it comes to cleaning your toilet. No need to spend time trying out different solutions and sweating away on a Saturday afternoon.', 'Cleaning','Toilet Bowl Brush, Detergent, Hot Water', 'Toilet Bowl', 2, 0.5) 

UPDATE guides SET users_id = '02817632-c9f8-4dcb-8670-8d28bdf3affa' WHERE guides_id = '062b3927-743b-41c5-bc59-9f38bbc55037'

INSERT INTO guides ( name, description, categories, tools_required, parts_required, difficulty, time_taken) VALUES
('The Most Comfortable Bedroom Ever', 'Tired of how your bedroom looks uninspiring and plain? With the use of a few simple items, you can make your bedroom into the coziest place in the house where you would love to chill, watch your shows and even work.', 'Home', 'Glue, Sticks, Screwdriver, Tape', 'Fairy Lights, RGB Light Strips, iKea Light Cloud', 3.5, 4) 

UPDATE guides SET users_id = '02817632-c9f8-4dcb-8670-8d28bdf3affa' WHERE guides_id = '38b44840-0ba0-42ec-992c-3a57e0b1c3d8'

INSERT INTO guides ( name, description, categories, tools_required, parts_required, difficulty, time_taken) VALUES
('Best Computer Desk Hack with Ikea ', 'Just by using Ikea parts, you can customize the coolest and funtional computer desk using different parts from ikea. You wont compromise on quality and save a fair amount as compared to buying a computer desk outside', 'Home','Screwdriver, Allen Key', 'Ikea Kitchen Counter Top, Ikea Desk Legs, Ikea Alex Drawers', 2, 3)

UPDATE guides SET users_id = '02817632-c9f8-4dcb-8670-8d28bdf3affa' WHERE guides_id = '1196217e-8449-4359-a1df-4a15c1608365'