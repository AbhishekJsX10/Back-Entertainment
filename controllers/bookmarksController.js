import bookmarked from "../models/bookmarkModel.js"

export async function removeBookmark(req, res){
    const bookmarkId = req.params.id;
    const userId = req.user._id;

    try {
        const bookmark = await bookmarked.findOneAndDelete({ _id: bookmarkId, userId });
        if (!bookmark) {
            return res.status(404).json({ error: 'Bookmark not found' });
        }
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

export async function addbookMark (req, res)  {
    const { itemId, itemType } = req.body;
    const userId = req.user._id;

    try {
        // Check if the bookmark already exists for the user and item
        const existingBookmark = await bookmarked.findOne({ userId, itemId, itemType });
        if (existingBookmark) {
            return res.status(400).json({ error: 'Bookmark already exists' });
        }

        const bookmark = new bookmarked({ userId, itemId, itemType });
        await bookmark.save();
        res.status(201).json(bookmark);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create bookmark' });
    }
}