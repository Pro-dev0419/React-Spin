export const getUniqueImages = (itemData) => {
	const images = [];
	itemData.forEach((item) => {
		if (item.image && !images.includes(item.image)) {
			images.push(item.image);
		}
	});
	return images;
}

export const getSelectedItemImage = (itemData, selectedItem) => {
	if (selectedItem != null) {
		const rewardItem = itemData[selectedItem];
		return rewardItem.image;
	}
	return null;
}
