// Import the necessary modules
const { expect } = require('chai');

// Import the object to be tested
const planYourTrip = require('./planYourTrip');

// Write the tests
describe("Tests for planYourTrip object", function() {
  describe("choosingDestination()", function() {
    it("should return the correct message for Ski Resort in Winter", function() {
      const result = planYourTrip.choosingDestination("Ski Resort", "Winter", 2024);
      expect(result).to.equal("Great choice! The Winter is the perfect time to visit the Ski Resort.");
    });
    
    it("should return the correct message for Ski Resort in other seasons", function() {
      const result = planYourTrip.choosingDestination("Ski Resort", "Summer", 2024);
      expect(result).to.equal("Consider visiting during the Winter for the best experience at the Ski Resort.");
    });

    it("should throw an error for invalid year", function() {
      expect(() => planYourTrip.choosingDestination("Ski Resort", "Winter", 2023)).to.throw(Error, "Invalid Year!");
    });

    it("should throw an error for invalid destination", function() {
      expect(() => planYourTrip.choosingDestination("Beach Resort", "Summer", 2024)).to.throw(Error, "This destination is not what you are looking for.");
    });
  });

  describe("exploreOptions()", function() {
    it("should remove an activity from the array and return the changed array as a string", function() {
      const activities = ["Skiing", "Snowboarding", "Winter Hiking"];
      const result = planYourTrip.exploreOptions(activities, 1);
      expect(result).to.equal("Skiing, Winter Hiking");
    });

    it("should throw an error for invalid parameters", function() {
      expect(() => planYourTrip.exploreOptions("Skiing", 1)).to.throw(Error, "Invalid Information!");
      expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], 2)).to.throw(Error, "Invalid Information!");
      expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], "test")).to.throw(Error, "Invalid Information!");
    });

    it("should handle removing the last activity from the array", function() {
      const activities = ["Skiing"];
      expect(planYourTrip.exploreOptions(activities, 0)).to.equal("");
    });
  });

  describe("estimateExpenses()", function() {
    it("should return the correct message for budget-friendly trip", function() {
      const result = planYourTrip.estimateExpenses(200, 2);
      expect(result).to.equal("The trip is budget-friendly, estimated cost is $400.00.");
    });

    it("should return the correct message for expensive trip", function() {
      const result = planYourTrip.estimateExpenses(500, 3);
      expect(result).to.equal("The estimated cost for the trip is $1500.00, plan accordingly.");
    });

    it("should throw an error for invalid parameters", function() {
      expect(() => planYourTrip.estimateExpenses("test", 2)).to.throw(Error, "Invalid Information!");
      expect(() => planYourTrip.estimateExpenses(200, "test")).to.throw(Error, "Invalid Information!");
      expect(() => planYourTrip.estimateExpenses(-200, 2)).to.throw(Error, "Invalid Information!");
      expect(() => planYourTrip.estimateExpenses(200, -2)).to.throw(Error, "Invalid Information!");
    });

    it("should handle zero distance and zero fuel cost per liter", function() {
      expect(() => planYourTrip.estimateExpenses(0, 0)).to.throw(Error, "Invalid Information!");
    });
  });
});
