'use strict';

import path form 'path';
import views form 'co-views';

export default views(path.join(__dirname, '../views/'), {
	map: {html: 'swig'}
});