const API_KEY = "ed015c026a7649f69039eaf7046b9eda";

async function getRecipes() {  
    try {
        const response = await fetch(`https://api.spoonicular.com/recipes/random?number=10&apikey=${API_KEY}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data.recipes; // Assuming the structure of the response is correct
    } catch (error) {
        console.error('Error fetching recipes:', error);
        return []; // Return an empty array or handle it as needed
    }
}





async function init() {
    const recipes = await getRecipes();
    console.log(recipes);
}

init();

/*
async function getRecipes() {
    try {
        const response = await fetch(`https://api.spoonicular.com/recipes/random?number=15&apikey=${API_KEY}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data.recipes;
    } catch (error) {
        console.error('Error fetching recipes:', error);
        return []; // Return an empty array or handle it as needed
    }
}
*/


