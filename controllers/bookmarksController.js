import bookmarked from "../models/bookmarkModel.js"
import Movies from "../models/bookmarkModel.js"
import tvShows from "../models/tvshowModel.js"
export async function removeBookmark(req, res){
    const bookmarkId = req.params.id;
    const userId = req.user._id;

    try {
        // Find the bookmark by ID and user ID
        const bookmark = await bookmarked.findOneAndDelete({ _id: bookmarkId, userId });
        if (!bookmark) {
            return res.status(404).json({ error: 'Bookmark not found' });
        }

        // Extract itemId and itemType
        const { itemId, itemType } = bookmark;

        // Find the corresponding movie or TV show
        let item;
        if (itemType === 'Movie') {
            item = await Movies.findById(itemId);
        } else if (itemType === 'TV Show') {
            item = await tvShows.findById(itemId);
        }

        // If the item is found, update its isBookmarked field to false and save it
        if (item) {
            item.isBookmarked = false;
            await item.save();
        }

        // Respond with success message
        res.status(200).json({ message: 'Bookmark deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete bookmark' });
    }
}


export async function allBookmarked(req, res) {
    const userId = req.user._id;

    try {
        const bookmarks = await bookmarked.find({ userId });
        res.status(200).json({sucess:true,data:bookmarks});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch bookmarks' });
    }
}

export async function addbookMark(req, res) {
    const { itemId, itemType } = req.body;
    const userId = req.user._id;

    try {
        // Check if the bookmark already exists for the user and item
        const existingBookmark = await bookmarked.findOne({ userId, itemId, itemType });
        if (existingBookmark) {
            return res.status(400).json({ error: 'Bookmark already exists' });
        }

        // Update the isBookmarked field of the corresponding movie or TV show
        if (itemType === 'Movie') {
            const movie = await Movies.findById(itemId);
            if (movie) {
                movie.isBookmarked = true;
                await movie.save();
            }
        } else if (itemType === 'TV Show') {
            const tvShow = await tvShows.findById(itemId);
            if (tvShow) {
                tvShow.isBookmarked = true;
                await tvShow.save();
            }
        } else {
            return res.status(400).json({ error: 'Invalid item type' });
        }

        // Create a new bookmark entry
        const bookmark = new bookmarked({ userId, itemId, itemType });
        await bookmark.save();
        // res.status(201).json({message:"",bookmark});
        res.status(201).json({ message: 'Bookmark deleted successfully',bookmark });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create bookmark' });
    }
}
