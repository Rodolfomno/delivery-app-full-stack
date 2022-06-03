module.exports = (err, _req, res, _next) => {
  if (err.details) {
    const [error] = err.details;
    const { message, type } = error;

    if (type === 'string.min' || type === 'string.email') {
        return res.status(401).json({ message });
    }

    return res.status(400).json({ message });
  }
  return res.status(500).json(err.message);
};
