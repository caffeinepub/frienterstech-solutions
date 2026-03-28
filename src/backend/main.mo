import Time "mo:core/Time";
import Text "mo:core/Text";
import Int "mo:core/Int";
import Order "mo:core/Order";
import List "mo:core/List";
import Array "mo:core/Array";

actor {
  type Submission = {
    name : Text;
    email : Text;
    companyName : Text;
    phone : ?Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Submission {
    public func compare(submission1 : Submission, submission2 : Submission) : Order.Order {
      Int.compare(submission2.timestamp, submission1.timestamp);
    };
  };

  // Store submissions in a persistent List
  let submissions = List.empty<Submission>();

  // Submit a new contact/quote form
  public shared ({ caller }) func submitForm(name : Text, email : Text, companyName : Text, phone : ?Text, message : Text) : async () {
    let newSubmission : Submission = {
      name;
      email;
      companyName;
      phone;
      message;
      timestamp = Time.now();
    };
    submissions.add(newSubmission);
  };

  // Get all form submissions (most recent first)
  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.toArray().sort();
  };
};
