require('express')().get('/',(q,s) => s.send('hello world')).listen(3000);
