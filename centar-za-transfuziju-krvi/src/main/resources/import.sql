insert into center(id,description,name,rating,address) values (1,"The best bank","Blood type",5,"Milenka Grcica 10")
insert into center(id,description,name,rating,address) values (2,"Almost the best bank","Transfusion",4.13,"Milenka Milosa 12")
insert into center(id,description,name,rating,address) values (3,"Mid best bank","Redd",4.3,"Janka Cmelika 57")
insert into center(id,description,name,rating,address) values (4,"Not the best bank","Blood--",3.14,"Svetosavska 1")
insert into center(id,description,name,rating,address) values (5,"Certainly not the best bank","Blood",2,"Narodnih heroja 4")
insert into loyalty values (1,"Very good benefits","Very good category",5)
insert into loyalty values (2,"Almost good benefits","Almost good category",3)
insert into registered_user values(1,"Milenka Grcica 2","0-","Novi Sad","Serbia","email@email.com",true,"M","Info","1234567890123","Imenko","Engineer","123456","0063111222","user","Prezimic",1)
insert into registered_user values(2,"Milenka Grcica 20","0+","Novi Sad","Serbia","gmail@gmail.com",true,"M","Info2","1234567890124","Imenkoo","SW Engineer","12389456","0063111333","user","Prezimicic",2)
insert into staff(id,name,surname,gender,email,password,role,address,city,country,phone,jmbg) values (1,"Zvonko","Zvonkic","M","zvonko@mail.com","sifra","Doctor","Partizanska 5","Beograd","Serbia","011311311","0987654321123")
insert into staff(id,name,surname,gender,email,password,role,address,city,country,phone,jmbg) values (2,"Mile","Milic","M","mile@mail.com","sifra","Doctor","Evropska 29","Beograd","Serbia","011312311","0987654321121")
insert into complaint(id,text,date,user_id,center_id,staff_id) values (1,"Low quality service.","2022-11-13",1,1,1)
insert into exam_report(id,height,weight,hiv,hbv,hcv,o2,user_id,staff_id) values (1,180,90,false,false,false,98,1,1)
insert into rating(id,room_rating,staff_rating,hospitality_rating,location_rating,cleanliness_rating,user_id,center_id) values (1,5,5,5,5,5,1,1)
insert into appointment(id,time,center_id,doctor_id,user_id) values (1,"2022-12-20 10:00:00",1,1,1)
insert into appointment(id,time,center_id,doctor_id,user_id) values (2,"2022-12-20 11:00:00",1,1,2)
insert into appointment(id,time,center_id,doctor_id,user_id) values (3,"2022-12-20 11:00:00",2,1,2)
insert into appointment(id,time,center_id,doctor_id,user_id) values (4,"2022-12-20 11:00:00",2,1,null)