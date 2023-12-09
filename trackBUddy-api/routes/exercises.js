const router = require('express').Router();
const Exercises = require('../models/exercises.model');


router.route('/').get((req,res)=>{
    Exercises.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Erro:'+ err));
});

router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercises = new Exercises({
        username,
        description,
        duration,
        date
    });

    newExercises.save()
        .then(()=>res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error:'+err))
});

module.exports = router;