r = 0;
for (i = 2; i<process.argv.length; i++)
{
    try {
        r+=Number(process.argv[i]);
    }
    catch(ex)
    {
        r=r;
    }
    //console.log(process.argv[i]);
}
console.log(r.toString());