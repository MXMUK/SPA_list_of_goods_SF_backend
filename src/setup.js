'use strict';

const { Good } = require('./models/Good');

Good.sync({ force: true });
Expense.sync({ force: true });
