import express from 'express';
import Recipe from '../models/Recipe.js';

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const newRecipe = await Recipe.create(req.body);
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(400).json({ message: "Error creating new recipe", error });
    }
});

router.get("/", async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: "Error getting recipes", error });
    }
});

router.get("/:id", async (req, res) => {
    console.log("Requested ID:", req.params.id);  // Log the requested ID
    try {
        const recipe = await Recipe.findById(req.params.id);
        console.log("Found Recipe:", recipe);  // Log the found recipe
        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }
        res.json(recipe);
    } catch (error) {
        console.error("Error fetching recipe:", error);
        res.status(500).json({ message: "Error fetching recipe", error });
    }
});


// PUT request to update a recipe by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;

    try {
        // Find the recipe by ID and update it
        const updatedRecipe = await Recipe.findByIdAndUpdate(id, updatedData, { new: true });
        res.status(200).json(updatedRecipe);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update recipe' });
    }
});

// PATCH
router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const updatedCategory = await Category.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
        if (!updatedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.json(updatedCategory);
    } catch (error) {
        res.status(400).json({ message: "Error updating category", error });
    }
});


router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Recipe.findByIdAndDelete(id);
        res.status(200).json({ message: "Recipe deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting recipe", error });
    }
});

export default router;
