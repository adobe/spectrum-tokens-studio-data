import json

files = [
    "src/tokens-studio/spectrum2-non-colors/Layout/Component/mobile.json",
    "src/tokens-studio/spectrum2-non-colors/Layout/Component/desktop.json"
]

TARGETS = ["border", "shadow", "corner-radius"]

def matches_any(s):
    if not s:
        return False
    s = str(s).lower()
    return any(x in s for x in TARGETS)

def recursive_filter(obj):
    if isinstance(obj, dict):
        new_dict = {}
        for k, v in obj.items():
            # Remove if key matches, or type/name in value matches
            if matches_any(k):
                print(f"Removing key (recursive): {k}")
                continue
            if isinstance(v, dict):
                if matches_any(v.get("type")) or matches_any(v.get("name")):
                    print(f"Removing key (recursive): {k}")
                    continue
                # Recurse into value
                filtered_v = recursive_filter(v)
                new_dict[k] = filtered_v
            elif isinstance(v, list):
                # Recurse into lists
                filtered_v = [recursive_filter(item) for item in v]
                new_dict[k] = filtered_v
            else:
                new_dict[k] = v
        return new_dict
    elif isinstance(obj, list):
        return [recursive_filter(item) for item in obj]
    else:
        return obj

for input_file in files:
    print(f"\nProcessing {input_file}")
    with open(input_file, "r") as f:
        data = json.load(f)
    print(f"Initial number of top-level elements: {len(data)}")
    filtered = recursive_filter(data)
    print(f"Final number of top-level elements: {len(filtered)}")
    with open(input_file, "w") as f:
        json.dump(filtered, f, indent=2)