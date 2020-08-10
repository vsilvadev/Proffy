const database = require("./db.js");
const createProffy = require("./createProffy.js")

database.then(async (db)=>{
    proffyValue = {
        name: "Vitor Silva", 
        avatar:"https://avatars3.githubusercontent.com/u/60434378?s=460&u=f3497d52861de514e8a1973fd3dce8132ed7aa8d&v=4",
        whatsapp: "89987654534",
        bio:"Entusiasta das melhores tecnologias de ciências avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    classValue = {
        subject: 1,
        cost:"20",
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        }, 
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]
    
    const selectedProffys = await db.all("SELECT * FROM proffys");
    
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.* 
        FROM proffys 
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1  
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)
})