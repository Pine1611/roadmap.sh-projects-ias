export const notFound = (_req, res) => {
    return res.status(200).json({ message: "Route doesn't exist!" });
};
