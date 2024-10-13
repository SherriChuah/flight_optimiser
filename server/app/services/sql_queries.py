# get_rows_given_query_sql = """
#             SELECT `airport_name`, `country`, `city`, `iata`
#             FROM `airportcodes`
#             WHERE `iata` LIKE %s
#             OR `country` LIKE %s
#             OR `city` LIKE %s
#             OR `airport_name` LIKE %s
#             ORDER BY
#                 CASE
#                     -- Exact match for `iata` has the highest priority
#                     WHEN `iata` = %s THEN 1
#                     -- Matches where the target word is at the beginning or end of the string
#                     WHEN `iata` LIKE %s THEN 2
#                     WHEN `country` LIKE %s THEN
#                         CASE
#                             WHEN `country` LIKE %s THEN 3  -- Starts with the target word
#                             WHEN `country` LIKE %s THEN 4  -- Ends with the target word
#                             ELSE 5
#                         END
#                     WHEN `city` LIKE %s THEN
#                         CASE
#                             WHEN `city` LIKE %s THEN 6  -- Starts with the target word
#                             WHEN `city` LIKE %s THEN 7  -- Ends with the target word
#                             ELSE 8
#                         END
#                     WHEN `airport_name` LIKE %s THEN
#                         CASE
#                             WHEN `airport_name` LIKE %s THEN 9  -- Starts with the target word
#                             WHEN `airport_name` LIKE %s THEN 10  -- Ends with the target word
#                             ELSE 11
#                         END
#                     ELSE 12
#                 END
#         """

get_all_rows_sql = """
        SELECT `airport_name`, `country`, `city`, `iata`
        FROM `airportcodes`
    """