class Controller {

  constructor(model) {
    this.model = model;
  }

  async find(req, res, next) {
    try {
      const collection = await this.model.find(req.query);
      res.status(200).json(collection);
    } catch (err) {
      next(err);
    }

  }

  async findOne(req, res, next) {
    try {
      const doc = await this.model.findOne(req.query);
      res.status(200).json(doc);
    } catch (err) {
      next(err);
    }
  }

  async findById(req, res, next) {
    try {
      let { id } = req.params;
      if (!id) {
        id = req.params.name;
      }
      if (!id) {
        id = req.query;
      }
      const doc = await this.model.findById(id);
      if (!doc) {
        res.status(404).end();
      }
      res.status(200).json(doc);
    } catch (err) {
      next(err);
    }

  }

  async create(req, res, next) {
    try {
      const doc = await this.model.create(req.body);
      res.status(201).json(doc);
    } catch (err) {
      next(err);
    }

  }

  async update(req, res, next) {
    try {
      const doc = await this.model.update(req.params.id, req.body);
      if (!doc) { res.status(404).end(); }
      res.status(200).json(doc);
    } catch (err) {
      next(err);
    }
  }

  async remove(req, res, next) {
    try {
      const doc = await this.model.remove(req.params.id);
      if (!doc) { res.status(404).end(); }
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }

}

module.exports = Controller;
