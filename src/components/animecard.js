import React from "react";
import { View, Image, Text } from "react-native";

function AnimeCard({ anime }) {
    return (
        <article className="anime-card">
            <a href={anime.url} target="_blank" rel="noreferrer">
                <figure>
                    <View>
                        <Image
                            source={anime.image_url}
                            style={{
                                width: 225,
                                height: 314,
                            }}
                        />

                        <View
                            style={{
                                position: "left",
                                top: 10,
                                left: 0,
                                right: 0,
                                height: 150,
                                width: 220,
                                alignItems: "center",
                                justifyContent: "left",
                            }}
                        >
                            <Text>
                                <h4>{anime.title}</h4>
                                <h6>
                                    <br></br>
                                    {anime.synopsis}
                                </h6>
                            </Text>
                        </View>
                    </View>
                </figure>
            </a>
        </article>
    );
}

export default AnimeCard;
