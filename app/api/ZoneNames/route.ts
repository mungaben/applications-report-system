


import prismaDb from "@/prisma/prismacli";
import { NextRequest, NextResponse } from "next/server";



// create zonename with Zoneid

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();
    const { name, id } = body;
 

    // find region name

    try {
        if (!name) {
            return NextResponse.json({
                error: 'Zone name is required',
                statusbar: 'error',
            });
        }
        if (!id) {
            return NextResponse.json({
                error: 'Zone id is required',
                statusbar: 'error',
            });
        }
        const zone = await prismaDb.zone.findFirst({
            where: {
                id: id,
            },
        });
      


        if (!zone) {
            return NextResponse.json({
                error: 'Zone does not exists',
                statusbar: 'error',

            });
        }
        // check if name exists
        const zoneNameexists = await prismaDb.zoneNames.findFirst({
            where: {
                name: name,
            },
        });
      
        if (zoneNameexists) {
            return NextResponse.json({
                error: 'Zone name already exists',
                statusbar: 'error',
            })
        }






        const result = await prismaDb.zoneNames.create({
            data: {
                name,
                zone: {
                    connect: {
                        id: zone.id,
                    },
                },

            },
        });



        return NextResponse.json({
            message: 'Zone created successfully',
            statusbar: 'success',
            result,
        });

    } catch (error) {


        return NextResponse.json({
            error: 'Error creating zone',
            statusbar: 'error',
        });
    }


}


// get all zonenames including zonenames

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        // find data from db name ZoneNames
        const zonenames = await prismaDb.zoneNames.findMany({
        });
    
        if (!zonenames) {
            return NextResponse.json({
                error: 'ZoneNames does not exists',
                statusbar: 'error',
            });
        }

        
        

        return  NextResponse.json({
            message: 'ZoneNames fetched successfully',
            statusbar: 'success',
            zonenames,
        });
    } catch (error) {
        return NextResponse.json({
            error: 'Error fetching zoneNames',
            statusbar: 'error',
        });
    }
}