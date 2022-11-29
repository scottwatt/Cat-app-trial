const Cat = require("../models/Cat");
const { verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

// CREATE
router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newCat = new Cat(req.body);

    try {
        const savedCatt = await newCat.save();
        res.status(200).json(savedCat);
    } catch (err) {
        res.status(500).json(err);
    }
});

// UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedCat = await Cat.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedCat);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Cat.findByIdAndDelete(req.params.id);
        res.status(200).json("Cat has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET CAT
router.get("/find/:id", async (req, res) => {
    try {
        const cat = await Cat.findById(req.params.id);
        res.status(200).json(cat);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL CATS
router.get("/", async (req, res) => {
    const queryNew = req.query.new;
    const queryCategory = req.query.category;
    try {
        let cats;

        if (queryNew) {
            cats = await Cat.find().sort({ createdAt: -1 }).limit(1);
        } else if (queryCategory) {
            cats = await Cat.find({
                categories: {
                    $in: [queryCategory],
                },
            });
        } else {
            cats = await Cat.find();
        }
        res.status(200).json(catts);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
