import React from 'react';
import { Text, TextStyle } from 'react-native';

/**
 * Props for the HighlightText component
 */
export interface HighlightTextProps {
	/**
	 * Base style for the text
	 */
	style?: TextStyle;

	/**
	 * Style applied to the highlighted portions of text
	 */
	highlightStyle?: TextStyle;

	/**
	 * The string to search for and highlight
	 */
	queryString: string;

	/**
	 * The text content to display and search within
	 */
	text: string;
}

/**
 * A component that highlights occurrences of a search string within text.
 *
 * @example
 * ```tsx
 * <HighlightText
 *   text="This is a sample text"
 *   queryString="sample"
 *   highlightStyle={{ backgroundColor: 'yellow' }}
 * />
 * ```
 */
export const HighlightText: React.FC<HighlightTextProps> = ({
	                                                            style = {},
	                                                            highlightStyle = {},
	                                                            queryString,
	                                                            text,
                                                            }) => {
	// If no search term is provided or the search term is empty,
	// return the original text
	if (!queryString || queryString.trim() === '') {
		return <Text style={style}>{text}</Text>;
	}

	// Escape special characters in the search term for RegExp
	const escapedQueryString = queryString.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

	// Create a RegExp object with the search text, 'i' for case-insensitive
	const regex = new RegExp(`(${escapedQueryString})`, 'i');

	// Split the text based on the search term
	const parts = text.split(regex);

	return (
		<Text style={style}>
			{parts.map((part, index) => {
				// Check if the current part matches the search term (case-insensitive)
				const isHighlighted = part.toLowerCase() === queryString.toLowerCase();

				return (
					<Text
						key={index}
						style={isHighlighted ? [style, highlightStyle] : style}
					>
						{part}
					</Text>
				);
			})}
		</Text>
	);
};