# Tokens Studio Project Rules

## Core Structure

### Token Organization
1. Tokens are organized into "token sets" which are defined in `$metadata.json` files
2. Each token set represents a specific category of design tokens (e.g., colors, typography, layout)
3. Token sets can be organized by:
   - Theme (light, dark, darkest, wireframe)
   - Scale (desktop, mobile)
   - Component type (global, component-specific)

### Token Format
1. Each token must have:
   - A unique UUID (stored in `$extensions.spectrum-tokens.uuid`)
   - A name (stored in `$extensions.spectrum-tokens.name`)
   - A value
   - A type
2. Token values can be:
   - Direct values (e.g., "10px", "#000000")
   - References to other tokens (using {TokenName} syntax)
   - Aliases (references to other tokens)

### File Structure
1. Main directories:
   - `spectrum-colors/` - Contains color-related tokens
   - `spectrum-non-colors/` - Contains non-color tokens (layout, typography, etc.)
2. Each directory contains:
   - `$metadata.json` - Defines token set order
   - `$themes.json` - Defines theme configurations
   - Individual token set JSON files

## Token Types and Schemas

### Supported Token Types
1. Color tokens:
   - `color` - Direct color values
   - `opacity` - Opacity values
2. Layout tokens:
   - `spacing` - Spacing/dimension values
   - `borderWidth` - Border width values
   - `borderRadius` - Border radius values
   - `sizing` - Size values
3. Typography tokens:
   - `fontSize` - Font size values
   - `fontWeight` - Font weight values
   - `fontFamily` - Font family values
   - `letterSpacing` - Letter spacing values
   - `lineHeight` - Line height values
4. Effect tokens:
   - `boxShadow` - Box shadow values

### Schema Validation
1. Each token type has an associated schema URL
2. Schemas are used to validate token values and types
3. Schema URLs follow the pattern: `https://opensource.adobe.com/spectrum-tokens/schemas/token-types/{type}.json`

## Token References and Aliases

### Reference Rules
1. Token references use the format: `{TokenSetName.TokenName}`
2. References can be nested (e.g., `{Alias.content.neutral.default}`)
3. References must be to existing tokens

### Alias Rules
1. Aliases are tokens that reference other tokens
2. Alias tokens must have:
   - A type of "alias"
   - A value that references another token
   - The same schema as the referenced token

## Theme and Scale Organization

### Theme Structure
1. Themes are defined in `$themes.json`
2. Each theme has:
   - A unique ID
   - A name
   - Selected token sets
   - A group (e.g., "S.Color-theme", "S.Scale")

### Scale Structure
1. Scales (desktop/mobile) are treated as themes
2. Scale-specific tokens are organized in separate token sets
3. Scale tokens can override theme tokens

## Best Practices

### Token Naming
1. Use kebab-case for token names
2. Include the token type in the name (e.g., "color-", "spacing-")
3. Use descriptive names that indicate the token's purpose

### Token Organization
1. Group related tokens together
2. Use consistent naming patterns within groups
3. Maintain clear hierarchy in token sets

### Value Consistency
1. Use consistent units within token types
2. Maintain consistent value formats
3. Use references to maintain consistency across tokens

### UUID Management
1. Each token must have a unique UUID
2. UUIDs should be preserved when tokens are modified
3. New tokens should be assigned new UUIDs

## Modification Rules

### Adding Tokens
1. Assign a new UUID
2. Follow the naming convention
3. Include required fields (value, type, extensions)
4. Add to appropriate token set

### Modifying Tokens
1. Preserve the UUID
2. Update the value and/or type
3. Maintain reference integrity
4. Update any dependent tokens

### Removing Tokens
1. Check for token references
2. Update any dependent tokens
3. Remove from all token sets
4. Update metadata if necessary

## Validation Requirements

### Required Fields
1. UUID
2. Name
3. Value
4. Type
5. Extensions (spectrum-tokens)

### Value Validation
1. Values must match the token type
2. References must be valid
3. Units must be consistent
4. Numbers must be within valid ranges

### Reference Validation
1. All references must exist
2. Reference types must match
3. No circular references
4. Valid reference syntax 