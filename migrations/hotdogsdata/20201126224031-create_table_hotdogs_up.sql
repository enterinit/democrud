CREATE TABLE hotdogs (
  hotdog_id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  title decimal NOT NULL,
  description text NOT NULL,
  image text NOT NULL
);