// Google Auth
/*  PASSPORT SETUP  */

const passport = require('passport');
const config = require('../../config.cjs');
var userProfile;
var loggedIn = false;

passport.serializeUser(function(user, cb) {
	cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
	cb(null, obj);
});

/*  Google AUTH  */


module.exports = {
	getUserProfile: function (){
		return userProfile;
	},
	init: function (app){
		app.use(passport.initialize());
		app.use(passport.session());

		app.get('/error', (req, res) => res.send("error logging in"));
		app.get('api/profile', (req, res) => {
			if(loggedIn){
				res.send(userProfile);
			}
			else{
				res.send({

				});
			}
		});


		const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
		passport.use(new GoogleStrategy({
			clientID: config.GOOGLE_CLIENT_ID,
			clientSecret: config.GOOGLE_CLIENT_SECRET,
			callbackURL: "http://localhost:3000/auth/google/callback"
		},
			function(accessToken, refreshToken, profile, done) {
				userProfile=profile;
				return done(null, userProfile);
			}
		));

		app.get('/api/auth/google',
			passport.authenticate('google', { scope : ['profile', 'email'] }));

		app.get('/auth/google/callback',
			passport.authenticate('google', { failureRedirect: '/error' }),
			function(req, res) {
				// Successful authentication, redirect success.
				loggedIn = true;
				var dbStatus;
				/*	console.log('1');
				http.request({
					host: 'localhost',
					port: 3000,
					path: '/api/auth/database',
					method: 'GET',
					headers: {'Content-Type': 'application/json'},
					body: {profile: userProfile}
				}, (response)=>{
					//console.log(response)
					dbStatus = response;
					if(dbStatus.found){
						if(dbStatus.new) res.redirect('http://localhost:8080/newuser');
						else res.redirect('http://localhost:8080/dashboard');
					}
					else {
						res.redirect('http://localhost:8080/contactAdmin');
					}
				});
				console.log('2');
				*/
					res.redirect('http://localhost:8080/dashboard');
				});
		return true;
	}
};
