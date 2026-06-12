const PLACE_ID = "ChIJIZ4geMlV24ARRVivcMmhOpk";

const FALLBACK_RATING = { rating: 4.9, reviewCount: 542 } as const;

export interface LiveRating {
  rating: number;
  reviewCount: number;
}

export async function getLiveRating(): Promise<LiveRating> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return FALLBACK_RATING;

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${PLACE_ID}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount",
        Accept: "application/json",
      },
      next: { revalidate: 86400 },
    });
    if (!res.ok) return FALLBACK_RATING;

    const data = (await res.json()) as {
      rating?: number;
      userRatingCount?: number;
    };
    return {
      rating: data.rating ?? FALLBACK_RATING.rating,
      reviewCount: data.userRatingCount ?? FALLBACK_RATING.reviewCount,
    };
  } catch {
    return FALLBACK_RATING;
  }
}
