export default function snapshotToArray(snapshot) {
  const collection = snapshot.val();
  return Object.keys(collection).map(itemId => {
    return {
      id: itemId,
      ...collection[itemId]
    };
  });
}
