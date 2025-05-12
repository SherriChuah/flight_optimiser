from itertools import product

from conversion import time_to_minutes

def best_flight_combo(each_group_flight_search_info_list: list[list]):
    def score_combination(combo, wait_weight=2.0, cost_weight=0.5):
        # outbound score
        outbound_arrival_times = [
            time_to_minutes(group_flight_info[1]["outbound_arrival_time"]) for group_flight_info in combo]
        
        outbound_wait_time = max(outbound_arrival_times) - min(outbound_arrival_times)
        
        # inbound score (if exist)
        inbound_wait_time = 0
        if 'inbound_departure_time' in combo[0][1]:
            inbound_departure_times = [
                time_to_minutes(group_flight_info[1]["inbound_departure_time"]) for group_flight_info in combo]
        
            inbound_wait_time = max(inbound_departure_times) - min(inbound_departure_times)
        

        # total score
        total_cost = sum(group_flight_info[1]["cost"] for group_flight_info in combo)

        # making outbound weight more than inbound weights
        return ((wait_weight * outbound_wait_time) + 
                (wait_weight/2 * inbound_wait_time) + (cost_weight * total_cost))

    # TODO: possibly do top k combos?
    best_combinations = []
    min_score = float('inf')

    df_group_flights = [group[1] for group in each_group_flight_search_info_list]

    all_combinations = product(*[df.iterrows() for df in df_group_flights])

    for combo in all_combinations:
        score = score_combination(combo)
        if score < min_score:
            min_score = score
            best_combinations = [combo]
        elif score == min_score:
            best_combinations.append(combo)
    
    return best_combinations