// lab/test/user.controller.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Assurez-vous d'importer correctement votre application Express

chai.use(chaiHttp);
chai.should();

describe('User Controller', () => {
  it('should get a user by username', (done) => {
    chai.request(app)
      .get('/api/users/username1') // Remplacez par un nom d'utilisateur existant
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        // Effectuez d'autres assertions en fonction de la structure de votre modèle d'utilisateur
        done();
      });
  });

  it('should not get a user when it does not exist', (done) => {
    chai.request(app)
      .get('/api/users/nonexistentusername') // Remplacez par un nom d'utilisateur qui n'existe pas
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.have.property('error').eql('Utilisateur non trouvé');
        done();
      });
  });
});
