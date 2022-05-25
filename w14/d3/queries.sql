select * from polls_question q left join polls_choice c on (q.id = c.question_id);


